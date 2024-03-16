import BlogContainer from "@/src/blog/BlogContainer";
import BottomNavigator from "@/src/shared/BottomNavigator";
import { VStack } from "@/src/shared/Stack";

const BlogPage = () => {
  return (
    <VStack>
      <BlogContainer />
      <BottomNavigator />
    </VStack>
  );
};

export default BlogPage;
