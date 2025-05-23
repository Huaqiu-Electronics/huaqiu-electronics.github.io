function gen_version_info(version: string) {

  return {
    [version]: {
      download: `https://down.eda.cn/data/kicad-release/kicad-huaqiu-${version}-x86_64.exe.zip`,
      //changelog: `https://kicad.eda.cn/docs/posts/KiCad-${version}-Release.html`,
      changelog:  version==="9.0.2" ? "https://www.kicad.org/blog/2025/05/KiCad-9.0.2-Release/" : `https://kicad.eda.cn/docs/posts/KiCad-${version}-Release.html`,
    },
  };
}

export function gen_version_info_list(version_list: string[]) {
  let version_info_list = {};
  for (let version of version_list) {
    version_info_list = Object.assign(
      version_info_list,
      gen_version_info(version)
    );
  }
  return version_info_list;
}
