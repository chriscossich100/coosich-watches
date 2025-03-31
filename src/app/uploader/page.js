
import {getWatchInfo} from "../../../public/js/actions";

import Uploader from "../components/uploader";

export default async function Page() {
  
  let brands = await getWatchInfo();
  console.log("the brand is: ", brands.result.rows);
  return (
    <Uploader brands = {brands.result.rows} />
  );
}
