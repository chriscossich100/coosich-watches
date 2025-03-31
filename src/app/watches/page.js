
import PageBanner from "../components/pageBanners";
// import WatchFilter from "../components/watchFiler";
import WatchesListPage from "../components/watchesListPage/watchesListPage";

export default async function Watches({searchParams}) {

const filters = (await searchParams);

console.log('the filters are: ', filters);


if (Object.keys(filters).length == 0) {
console.log('damn there are no filtes my ddue')
}

let url = "http://localhost:3030/watches";
if (Object.keys(filters).length > 0) {
const queryParams = new URLSearchParams(filters).toString();

url += `?${queryParams}`;
console.log('the url is: ', url);
}

let watchesFound = await fetch(url);
let data = await watchesFound.json();
console.log('the data is: ', data);
  return (
    <div>
      <PageBanner />
      <WatchesListPage watches={data} filters = {filters}/>
    </div>
  );
}
