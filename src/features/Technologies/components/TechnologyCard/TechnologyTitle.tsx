type TechologyTitleProps = {
  name: string;
  description: string;
};

const TechnologyTitle : React.FC<TechologyTitleProps> = ({
  name,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-800">{name}</span>
      <p className="text-xs text-gray-500">{description.slice(0, 30)}...</p>
    </div>
  );
};

export default TechnologyTitle ;
