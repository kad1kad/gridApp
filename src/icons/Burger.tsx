/**
 * Burger Component
 */
interface BurgerProps {
  onClick: () => void;
}

const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <svg
      className="Icon"
      viewBox="0 0 100 80"
      width="20"
      height="20"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
};

export default Burger;
