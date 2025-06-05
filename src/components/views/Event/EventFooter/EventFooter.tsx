import { LIMIT_LISTS } from "@/constants/list.constants";
import useChangeUrl from "@/hooks/useChangeUrl";
import { Pagination, Select, SelectItem } from "@nextui-org/react";

interface PropTypes {
  totalPages: number;
}

const EventFooter = (props: PropTypes) => {
  const { totalPages } = props;
  const { currentLimit, currentPage, handleChangePage, handleChangeLimit } =
    useChangeUrl();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-2 lg:flex-row lg:justify-between">
      {/* <div className="flex h-8 w-full flex-1 items-center justify-center gap-2 lg:justify-start lg:gap-4">
        
      </div> */}
      <Select
        className="max-w-28"
        size="md"
        selectedKeys={[`${currentLimit}`]}
        selectionMode="single"
        onChange={handleChangeLimit}
        startContent={<p className="text-small">Show:</p>}
        disallowEmptySelection
      >
        {LIMIT_LISTS.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
      {totalPages > 1 && (
        <Pagination
          isCompact
          showControls
          color="primary"
          page={Number(currentPage)}
          total={totalPages}
          onChange={handleChangePage}
          loop
        />
      )}
    </div>
  );
};

export default EventFooter;
