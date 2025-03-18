import { handleDownloadUrl } from "./handle_download_url";
import axios from "axios";

 interface DataBuriedPoint {
  name: string;
  doc: string;
  exemplar: Record<string, string>;
}

async function data_buried_pont(dataBuriedPoint: DataBuriedPoint) {
  try {
    const response = await axios.post(
      "https://www.eda.cn/data_buried_point",
      dataBuriedPoint
    );
    console.log("DataBuriedPoint inserted successfully:", response.data);
  } catch (error) {
    console.error("Error inserting DataBuriedPoint:", error);
  }
}

const general_exemplar = () => ({
  href: window.location.href,
  search : window.location.search
});

export async function download_hq_dist(download_url: string) {
  handleDownloadUrl(download_url);
  await data_buried_pont({
    name: "kicad_hq_distribution_download",
    doc: "KiCad HQ Distribution Download",
    exemplar: { download_url: download_url, ...general_exemplar() },
  });
}


export async function on_enter_page() {
  await data_buried_pont({
    name: "kicad_eda_cn",
    doc: "Visit EDA.CN",
    exemplar: { ...general_exemplar() },
  });
}
