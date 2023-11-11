import {
  Skeleton,
  Card,
  CardBody,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

const LoadingSkeletons = () => {
  return (
    <>
      <Card
        w={{ sm: "290px", md: "310px", lg: "320px" }}
        maxW="sm"
        h="sm"
        m="4px"
        borderRadius="lg"
      >
        <Skeleton h="250px" borderTopRadius="lg" />
        <CardBody>
          <SkeletonText />
          <SkeletonCircle float={"right"} mt={4} size="40px" />
        </CardBody>
      </Card>
    </>
  );
};

export default LoadingSkeletons;
