interface SkeletonProps {
  width?: string;
  length?: number;
}

const SkeletonLoader = ({ width = "unset", length = 3 }: SkeletonProps) => {
  const skeletions = Array.from({ length }, (_, inx) => (
    <div key={inx} className="skeleton-shape"></div>
  ));
  return (
    <div className="skeleton-loader" style={{ width }}>
      {skeletions}
    </div>
  );
};

export default SkeletonLoader;
