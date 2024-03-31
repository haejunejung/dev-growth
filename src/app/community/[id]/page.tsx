import CommunityDetailPage from '@/screens/community/[id]';

interface CommunityDetailProps {
  params: {
    id: string;
  };
}

export default function CommunityDetail({params}: CommunityDetailProps) {
  return <CommunityDetailPage id={params.id} />;
}
