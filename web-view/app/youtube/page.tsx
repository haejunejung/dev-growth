import BottomNavigator from "@/src/shared/BottomNavigator";
import { VStack } from "@/src/shared/Stack";
import YoutubeContainer from "@/src/youtube/YoutubeContainer";

const YoutubePage = () => {
  return (
    <VStack>
      <YoutubeContainer />
      <BottomNavigator />
    </VStack>
  );
};

export default YoutubePage;
