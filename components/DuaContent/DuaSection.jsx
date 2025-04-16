
const DuaSection = ({ sectionTitle }) => {
  return (
    <div className='bg-white p-4 rounded-lg mb-4 border border-[#E2E2E2]'>
      <h1>
        <span className='text-[#1FA45B] font-semibold'>Section:</span> {sectionTitle || "Select a subcategory"}
      </h1>
    </div>
  );
};

export default DuaSection;
