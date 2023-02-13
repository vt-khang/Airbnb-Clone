import Button from '@/components/Button';
import FilterIcon from '@/icons/FilterIcon';

function FilterButton() {
  return (
    <Button
      type="outline"
      className="filter-btn"
    >
      <span className="filter-btn-icon">
        <FilterIcon color="#222222" />
        <span>Bộ lọc</span>
      </span>
    </Button>
  );
}

export default FilterButton;
