import { handleDownloadUrl } from "./handle_download_url";
import axios from "axios";

export interface DataBuriedPoint {
  name: string;
  doc: string;
}

export async function data_buried_pont(url: string) {
  const dataBuriedPoint: DataBuriedPoint = {
    doc: `${window.location.href}:${url}`,
    name: 'kicad_hq_distribution_download',
  };

  handleDownloadUrl(url);

  try {
    const response = await axios.post('https://www.eda.cn/data_buried_point', dataBuriedPoint);
    console.log("DataBuriedPoint inserted successfully:", response.data);
  } catch (error) {
    console.error("Error inserting DataBuriedPoint:", error);
  }
}

