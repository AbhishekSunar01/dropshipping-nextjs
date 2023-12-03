import ImportCard from "@/app/components/ImportCard";
import SearchBar from "@/app/components/SearchBar";

const Imports = () => {
  return (
    <div>
      <div className="flex flex-col">
        <SearchBar />
        <ImportCard />
      </div>
    </div>
  );
};

export default Imports;
