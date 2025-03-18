import { handleDownloadUrl } from "./handle_download_url";
import axios from "axios";

 interface DataBuriedPoint {
  name: string;
  doc: string;
  source? :string ;
}

async function data_buried_pont(dataBuriedPoint: DataBuriedPoint) {
  try {
    const response = await axios.post(
      "https://blog.eda.cn/data_buried_point",
      dataBuriedPoint
    );
    console.log("DataBuriedPoint inserted successfully:", response.data);
  } catch (error) {
    console.error("Error inserting DataBuriedPoint:", error);
  }
}

const get_from = () => {
  let params = new URL(document.location.toString()).searchParams;
  let from = params.get("from");
  return from

};

export async function download_hq_dist(download_url: string) {
  handleDownloadUrl(download_url);
  await data_buried_pont({
    name: "kicad_hq_distribution_download",
    doc: "KiCad HQ Distribution Download",
    source: get_from() ?? undefined,
  });
}


export async function on_enter_page() {
  await data_buried_pont({
    name: "kicad_eda_cn",
    doc: "Visit EDA.CN",
    source: get_from() ?? undefined,
  });
}
