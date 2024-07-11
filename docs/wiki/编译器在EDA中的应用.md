---
tags:
  - EDA
  - WiKi
  - 技术
---

# 编译器在 EDA 中的应用

![编译器管道](/assets/compiler-pipeline.png)

> 在计算领域，[编译器](https://en.wikipedia.org/wiki/Compiler) 是一种将用一种编程语言（源语言）编写的计算机代码翻译成另一种语言（目标语言）的计算机程序。"编译器"这个名字主要用于将源代码从高级编程语言翻译成低级编程语言（例如汇编语言、目标代码或机器代码）以创建可执行程序的程序。

## 解析器

> [解析器](https://en.wikipedia.org/wiki/Parsing#Parser) 是一个软件组件，它接受输入数据（通常是文本）并构建数据结构——通常是某种解析树、抽象语法树或其他层次结构，提供输入的结构表示，同时检查语法是否正确。解析之前或之后可能会有其他步骤，或者这些步骤可能会组合成一个步骤。解析器通常先于一个单独的词法分析器，它从输入字符序列中创建标记；或者，这些步骤可以组合在一起进行解析。解析器可以由手工编程，也可以由解析器生成器自动或半自动生成。解析是模板化的补充，模板化生成格式化的输出。这些方法可以应用于不同的领域，但通常会一起出现，例如 scanf/printf 配对，或者编译器的输入（前端解析）和输出（后端代码生成）阶段。

### 反序列化

- 二进制

[ALTIUM_BINARY_PARSER](https://gitlab.com/kicad/code/kicad/-/blob/master/common/io/altium/altium_binary_parser.h)

```cpp
class ALTIUM_BINARY_PARSER
{
public:
    template <typename Type>
    Type Read();

    template <typename Type>
    Type Peek();


    std::map<uint32_t, wxString> ReadWideStringTable();

    std::vector<char> ReadVector( size_t aSize );

    int ReadBytes( char* aOut, size_t aSize );

    std::map<wxString, wxString> ReadProperties(
            std::function<std::map<wxString, wxString>( const std::string& )> handleBinaryData =
                    []( const std::string& ));

};

```

- 符号表达式

[SCH_IO_KICAD_SEXPR_PARSER](https://gitlab.com/kicad/code/kicad/-/blob/master/eeschema/sch_io/kicad_sexpr/sch_io_kicad_sexpr_parser.h)

```cpp
/**
 * Object to parser s-expression symbol library and schematic file formats.
 */
class SCH_IO_KICAD_SEXPR_PARSER : public SCHEMATIC_LEXER
{
public:
    /**
     * Parse the internal #LINE_READER object into \a aSheet.
     *
     * When \a aIsCopyableOnly is true, only schematic objects that are viewable on the canvas
     * for copy and paste purposes are parsed.  Other schematic content such as bus definitions
     * or instance data will throw an #IO_ERROR exception.
     *
     * When \a aIsCopyableOnly is false, full schematic file parsing is performed.
     *
     * @note This does not load any sub-sheets or decent complex sheet hierarchies.
     *
     * @param aSheet The #SCH_SHEET object to store the parsed schematic file.
     * @param aIsCopyableOnly Load only the schematic objects that can be copied into \a aSheet
     *                        if true.  Otherwise, load the full schematic file format.
     * @param aFileVersion The schematic file version to parser.  Defaults to the schematic
     *                     file being parsed when \a aIsCopyableOnly is false.
     */
    void ParseSchematic( SCH_SHEET* aSheet, bool aIsCopyablyOnly = false,
                         int aFileVersion = SEXPR_SCHEMATIC_FILE_VERSION );
};
```

**P.S. 原理图是如何序列化的**

[SCH_IO_KICAD_SEXPR](https://gitlab.com/kicad/code/kicad/-/blob/master/eeschema/sch_io/kicad_sexpr/sch_io_kicad_sexpr.h)

```cpp
class SCH_IO_KICAD_SEXPR : public SCH_IO
{
public:

    void SaveSchematicFile( const wxString& aFileName, SCH_SHEET* aSheet, SCHEMATIC* aSchematic,
                            const STRING_UTF8_MAP* aProperties = nullptr ) override;

private:
    void saveSymbol( SCH_SYMBOL* aSymbol, const SCHEMATIC& aSchematic, int aNestLevel,
                     bool aForClipboard, const SCH_SHEET_PATH* aRelativePath = nullptr );
    void saveField( SCH_FIELD* aField, int aNestLevel );
    void saveBitmap( SCH_BITMAP* aBitmap, int aNestLevel );
    void saveSheet( SCH_SHEET* aSheet, int aNestLevel );
    void saveJunction( SCH_JUNCTION* aJunction, int aNestLevel );
    void saveNoConnect( SCH_NO_CONNECT* aNoConnect, int aNestLevel );
    void saveBusEntry( SCH_BUS_ENTRY_BASE* aBusEntry, int aNestLevel );
    void saveLine( SCH_LINE* aLine, int aNestLevel );
    void saveShape( SCH_SHAPE* aShape, int aNestLevel );
    void saveRuleArea( SCH_RULE_AREA* aRuleArea, int aNestLevel );
    void saveText( SCH_TEXT* aText, int aNestLevel );
    void saveTextBox( SCH_TEXTBOX* aText, int aNestLevel );
    void saveTable( SCH_TABLE* aTable, int aNestLevel );
    void saveBusAlias( std::shared_ptr<BUS_ALIAS> aAlias, int aNestLevel );
    void saveInstances( const std::vector<SCH_SHEET_INSTANCE>& aSheets, int aNestLevel );

    void cacheLib( const wxString& aLibraryFileName, const STRING_UTF8_MAP* aProperties );
    bool isBuffering( const STRING_UTF8_MAP* aProperties );

};

```

### 序列化和反序列化

- Json

[Bom Settings](https://gitlab.com/kicad/code/kicad/-/blob/master/include/settings/bom_settings.h)

```cpp
void to_json( nlohmann::json& j, const BOM_FIELD& f );
void from_json( const nlohmann::json& j, BOM_FIELD& f );


void to_json( nlohmann::json& j, const BOM_PRESET& f );
void from_json( const nlohmann::json& j, BOM_PRESET& f );

void to_json( nlohmann::json& j, const BOM_FMT_PRESET& f );
void from_json( const nlohmann::json& j, BOM_FMT_PRESET& f );

```

- Symbol Expression

[SExpression](https://github.com/LibrePCB/LibrePCB/blob/master/libs/librepcb/core/serialization/sexpression.h)

```cpp
class SExpression final {
public:
  QByteArray toByteArray() const;
  static SExpression parse(const QByteArray& content, const FilePath& filePath);
};
```

## 转译器

> [转译器](https://en.wikipedia.org/wiki/Source-to-source_compiler)，源到源编译器 (S2S 编译器)，转编译器或转换器 是一种翻译器，它将用一种编程语言编写的程序源代码作为输入，并生成等效的同一或不同编程语言的源代码。转译器在大致相同的抽象级别操作的编程语言之间进行转换，而传统编译器则将高级编程语言翻译为低级编程语言。例如，转译器可以将程序从 Python 翻译为 JavaScript，而传统编译器则将语言从 C 翻译为汇编或从 Java 翻译为字节码。自动并行化编译器通常会将高级语言程序作为输入，然后转换代码并用并行代码注释（例如 OpenMP）或语言结构（例如 Fortran 的 forall 语句）对其进行注释。

- [SCH_IO_ALTIUM](https://gitlab.com/kicad/code/kicad/-/blob/master/eeschema/sch_io/altium/sch_io_altium.h)

```cpp
class SCH_IO_ALTIUM : public SCH_IO
{
public:
    SCH_SHEET* LoadSchematicFile( const wxString& aFileName, SCHEMATIC* aSchematic,
                                  SCH_SHEET*             aAppendToMe = nullptr,
                                  const STRING_UTF8_MAP* aProperties = nullptr ) override;
};

```

## 类型检查器 vs ERC

### 介绍

[类型检查器](https://en.wikipedia.org/wiki/Type_system)

> 在计算机编程中，类型系统是一个逻辑系统，由一组规则组成，这些规则为每个术语（一个单词、短语或其他符号集）分配一个称为类型的属性（例如，整数、浮点、字符串）。通常，这些术语是计算机程序的各种组成部分，而这些类型表示这些程序的值的种类。类型系统将计算机程序中的值（如变量）和表达式与类型（例如整数、浮点数、字符串）相关联。它可以用来通过在编译时提前检测某些可能的编程错误来提高程序的可靠性。

[ERC](https://resources.pcb.cadence.com/blog/2023-electrical-rule-check)

> 设计规则检查 (DRC) 是物理设计流程中强制执行 IC 设计层代数规则和几何语义的一种方法。设计规则检查是设计签核过程中使用的基本方法。ERC（Electrical Rule Checking）是设计规则检查的一种类型，它检查电路的电气特性，以确保它们满足设计规则。例如，ERC 可能会检查电路中的信号电压、频率和电流，以确保它们在允许的范围内。

### ERC 示例

- [KiCad ERC](https://gitlab.com/kicad/code/kicad/-/blob/master/eeschema/erc/erc.h)

```cpp
class ERC_TESTER
{
public:

    /**
     * Inside a given sheet, one cannot have sheets with duplicate names (file
     * names can be duplicated).
     *
     * @return the error count
     * @param aCreateMarker: true = create error markers in schematic,
     *                       false = calculate error count only
     */
    int TestDuplicateSheetNames( bool aCreateMarker );

    /**
     * Check for any unresolved text variable references.
     */
    void TestTextVars( DS_PROXY_VIEW_ITEM* aDrawingSheet );

    /**
     * Check that there are no conflicting bus alias definitions in the schematic.
     *
     * (for example, two hierarchical sub-sheets contain different definitions for
     * the same bus alias)
     *
     * @return the error count
     */
    int TestConflictingBusAliases();

    /**
     * Test if all units of each multiunit symbol have the same footprint assigned.
     * @return The error count.
     */
    int TestMultiunitFootprints();

    /**
     * In KiCad 5 and earlier, you could connect stuff up to pins with NC electrical type.
     * In KiCad 6, this no longer results in those pins joining the net, so we need to warn about it
     * @return the error count
     */
    int TestNoConnectPins();

    /**
     * Checks the full netlist against the pin-to-pin connectivity requirements
     * @return the error count
     */
    int TestPinToPin()
  {
    ERC_SETTINGS&  settings = m_schematic->ErcSettings();
    const NET_MAP& nets     = m_schematic->ConnectionGraph()->GetNetMap();

    int errors = 0;

    for( const std::pair<NET_NAME_CODE_CACHE_KEY, std::vector<CONNECTION_SUBGRAPH*>> net : nets )
    {
          std::vector<ERC_SCH_PIN_CONTEXT>           pins;
          std::unordered_map<EDA_ITEM*, SCH_SCREEN*> pinToScreenMap;
          bool has_noconnect = false;

          for( CONNECTION_SUBGRAPH* subgraph: net.second )
          {
              if( subgraph->GetNoConnect() )
                  has_noconnect = true;

              for( SCH_ITEM* item : subgraph->GetItems() )
              {
                  if( item->Type() == SCH_PIN_T )
                  {
                      pins.emplace_back( static_cast<SCH_PIN*>( item ), subgraph->GetSheet() );
                      pinToScreenMap[item] = subgraph->GetSheet().LastScreen();
                  }
              }
          }

          std::sort( pins.begin(), pins.end(),
                    []( const ERC_SCH_PIN_CONTEXT& lhs, const ERC_SCH_PIN_CONTEXT& rhs )
                    {
                        int ret = StrNumCmp( lhs.Pin()->GetParentSymbol()->GetRef( &lhs.Sheet() ),
                                              rhs.Pin()->GetParentSymbol()->GetRef( &rhs.Sheet() ) );

                        if( ret == 0 )
                            ret = StrNumCmp( lhs.Pin()->GetNumber(), rhs.Pin()->GetNumber() );

                        if( ret == 0 )
                            ret = lhs < rhs; // Fallback to hash to guarantee deterministic sort

                        return ret < 0;
                    } );

          ERC_SCH_PIN_CONTEXT needsDriver;
          bool                hasDriver = false;

          // We need different drivers for power nets and normal nets.
          // A power net has at least one pin having the ELECTRICAL_PINTYPE::PT_POWER_IN
          // and power nets can be driven only by ELECTRICAL_PINTYPE::PT_POWER_OUT pins
          bool     ispowerNet  = false;

          for( ERC_SCH_PIN_CONTEXT& refPin : pins )
          {
              if( refPin.Pin()->GetType() == ELECTRICAL_PINTYPE::PT_POWER_IN )
              {
                  ispowerNet = true;
                  break;
              }
          }

          for( auto refIt = pins.begin(); refIt != pins.end(); ++refIt )
          {
              ERC_SCH_PIN_CONTEXT& refPin = *refIt;
              ELECTRICAL_PINTYPE refType = refPin.Pin()->GetType();

              if( DrivenPinTypes.contains( refType ) )
              {
                  // needsDriver will be the pin shown in the error report eventually, so try to
                  // upgrade to a "better" pin if possible: something visible and only a power symbol
                  // if this net needs a power driver
                  if( !needsDriver.Pin()
                      || ( !needsDriver.Pin()->IsVisible() && refPin.Pin()->IsVisible() )
                      || ( ispowerNet
                                  != ( needsDriver.Pin()->GetType()
                                        == ELECTRICAL_PINTYPE::PT_POWER_IN )
                          && ispowerNet == ( refType == ELECTRICAL_PINTYPE::PT_POWER_IN ) ) )
                  {
                      needsDriver = refPin;
                  }
              }

              if( ispowerNet )
                  hasDriver |= ( DrivingPowerPinTypes.count( refType ) != 0 );
              else
                  hasDriver |= ( DrivingPinTypes.count( refType ) != 0 );

              for( auto testIt = refIt + 1; testIt != pins.end(); ++testIt )
              {
                  ERC_SCH_PIN_CONTEXT& testPin = *testIt;

                  // Multiple pins in the same symbol that share a type,
                  // name and position are considered
                  // "stacked" and shouldn't trigger ERC errors
                  if( refPin.Pin()->IsStacked( testPin.Pin() ) && refPin.Sheet() == testPin.Sheet() )
                      continue;

                  ELECTRICAL_PINTYPE testType = testPin.Pin()->GetType();

                  if( ispowerNet )
                      hasDriver |= DrivingPowerPinTypes.contains( testType );
                  else
                      hasDriver |= DrivingPinTypes.contains( testType );

                  PIN_ERROR erc = settings.GetPinMapValue( refType, testType );

                  if( erc != PIN_ERROR::OK && settings.IsTestEnabled( ERCE_PIN_TO_PIN_WARNING ) )
                  {
                      std::shared_ptr<ERC_ITEM> ercItem =
                              ERC_ITEM::Create( erc == PIN_ERROR::WARNING ? ERCE_PIN_TO_PIN_WARNING :
                                                                            ERCE_PIN_TO_PIN_ERROR );
                      ercItem->SetItems( refPin.Pin(), testPin.Pin() );
                      ercItem->SetSheetSpecificPath( refPin.Sheet() );
                      ercItem->SetItemsSheetPaths( refPin.Sheet(), testPin.Sheet() );

                      ercItem->SetErrorMessage(
                              wxString::Format( _( "Pins of type %s and %s are connected" ),
                                                ElectricalPinTypeGetText( refType ),
                                                ElectricalPinTypeGetText( testType ) ) );

                      SCH_MARKER* marker = new SCH_MARKER( ercItem, refPin.Pin()->GetPosition() );
                      pinToScreenMap[refPin.Pin()]->Append( marker );
                      errors++;
                  }
              }
          }

          if( needsDriver.Pin() && !hasDriver && !has_noconnect )
          {
              int err_code = ispowerNet ? ERCE_POWERPIN_NOT_DRIVEN : ERCE_PIN_NOT_DRIVEN;

              if( settings.IsTestEnabled( err_code ) )
              {
                  std::shared_ptr<ERC_ITEM> ercItem = ERC_ITEM::Create( err_code );

                  ercItem->SetItems( needsDriver.Pin() );
                  ercItem->SetSheetSpecificPath( needsDriver.Sheet() );
                  ercItem->SetItemsSheetPaths( needsDriver.Sheet() );

                  SCH_MARKER* marker = new SCH_MARKER( ercItem, needsDriver.Pin()->GetPosition() );
                  pinToScreenMap[needsDriver.Pin()]->Append( marker );
                  errors++;
              }
          }
      }

      return errors;
    }


    /**
     * Checks if shared pins on multi-unit symbols have been connected to different nets
     * @return the error count
     */
    int TestMultUnitPinConflicts();

    /**
     * Checks for labels that differ only in capitalization
     * @return the error count
     */
    int TestSimilarLabels();

    /**
     * Test to see if there are potentially confusing 4-way junctions in the schematic.
    */
    int TestFourWayJunction();

    /**
     * Test symbols for changed library symbols and broken symbol library links.
     * @return the number of issues found
     */
    int TestLibSymbolIssues();

    /**
     * Test footprint links against the current footprint libraries.
     * @return the number of issues found
     */
    int TestFootprintLinkIssues( KIFACE* aCvPcb, PROJECT* aProject );

    /**
     * Test pins and wire ends for being off grid.
     * @return the error count
     */
    int TestOffGridEndpoints();

    /**
     * Test SPICE models for various issues.
     */
    int TestSimModelIssues();

    /**
     * Test for uninstantiated units of multi unit symbols
     */
    int TestMissingUnits();

    /**
     * Tests for netclasses that are referenced but not defined.
     * @return
     */
    int TestMissingNetclasses();

    /**
     * Tests for rule area ERC issues
     */
    int RunRuleAreaERC();

    /**
     * Runs ERC to check for overlapping rule areas
     */
    int TestRuleAreaOverlappingRuleAreasERC(
            std::map<SCH_SCREEN*, std::vector<SCH_RULE_AREA*>>& allScreenRuleAreas );

    void RunTests( DS_PROXY_VIEW_ITEM* aDrawingSheet, SCH_EDIT_FRAME* aEditFrame,
                   KIFACE* aCvPcb, PROJECT* aProject, PROGRESS_REPORTER* aProgressReporter );

};


```

- [LibrePCB ERC](https://github.com/LibrePCB/LibrePCB/blob/master/libs/librepcb/core/project/erc/electricalrulecheck.h)

```cpp
class ElectricalRuleCheck final {
public:
  // General Methods
  RuleCheckMessageList runChecks() const;

private:  // Methods
  void checkNetClasses(RuleCheckMessageList& msgs) const;
  void checkNetSignals(RuleCheckMessageList& msgs) const;
  void checkComponents(RuleCheckMessageList& msgs) const;
  void checkComponentSignals(const ComponentInstance& cmp,
                             RuleCheckMessageList& msgs) const;
  void checkSchematics(RuleCheckMessageList& msgs) const;
  void checkSymbols(const Schematic& schematic,
                    RuleCheckMessageList& msgs) const;
  void checkPins(const SI_Symbol& symbol, RuleCheckMessageList& msgs) const
  {
    foreach (const SI_SymbolPin* pin, symbol.getPins()) {
      if ((pin->getNetLines().isEmpty()) && (pin->getCompSigInstNetSignal())) {
        msgs.append(std::make_shared<ErcMsgConnectedPinWithoutWire>(*pin));
      }
    }
  }


  void checkNetSegments(const Schematic& schematic,
                        RuleCheckMessageList& msgs) const
  {
    foreach (const SI_NetSegment* netSegment, schematic.getNetSegments()) {
      checkNetPoints(*netSegment, msgs);

      // If there are no net labels, check for any open wire. But only if there's
      // no "open net" warning on the net raised, since this would be quite a
      // duplicate warning.
      if (netSegment->getNetLabels().isEmpty() &&
          (!mOpenNetSignals.contains(&netSegment->getNetSignal()))) {
        foreach (const SI_NetLine* netLine, netSegment->getNetLines()) {
          if (netLine->getStartPoint().isOpen() ||
              netLine->getEndPoint().isOpen()) {
            msgs.append(std::make_shared<ErcMsgOpenWireInSegment>(*netSegment));
            break;
          }
        }
      }
    }
  }
  void checkNetPoints(const SI_NetSegment& netSegment,
                      RuleCheckMessageList& msgs) const;
};


```

### Type Checker Example

- [python type checker](https://github.com/microsoft/pyright/blob/main/packages/pyright-internal/src/analyzer/checker.ts)

```ts
export class Checker extends ParseTreeWalker {
  override visitBinaryOperation(node: BinaryOperationNode): boolean {
    if (
      node.operator === OperatorType.And ||
      node.operator === OperatorType.Or
    ) {
      this._validateConditionalIsBool(node.leftExpression);
      this._validateConditionalIsBool(node.rightExpression);
    }

    if (
      node.operator === OperatorType.Equals ||
      node.operator === OperatorType.NotEquals
    ) {
      // Don't apply this rule if it's within an assert.
      if (!ParseTreeUtils.isWithinAssertExpression(node)) {
        this._validateComparisonTypes(node);
      }
    } else if (
      node.operator === OperatorType.Is ||
      node.operator === OperatorType.IsNot
    ) {
      // Don't apply this rule if it's within an assert.
      if (!ParseTreeUtils.isWithinAssertExpression(node)) {
        this._validateComparisonTypesForIsOperator(node);
      }
    } else if (
      node.operator === OperatorType.In ||
      node.operator === OperatorType.NotIn
    ) {
      // Don't apply this rule if it's within an assert.
      if (!ParseTreeUtils.isWithinAssertExpression(node)) {
        this._validateContainmentTypes(node);
      }
    }

    this._evaluator.getType(node);
    return true;
  }
}
```

### 对比

| 项目   |  类型检查器  |       ERC        |
| :----- | :----------: | :--------------: |
| Input  |     Code     |      SExpr       |
| IR     |     AST      |     Netlist      |
| Output | Syntax Error | Electrical Error |
