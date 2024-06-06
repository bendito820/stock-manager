import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MySkeleton({ count }: { count: number }) {
  return <Skeleton count={count} />;
}
