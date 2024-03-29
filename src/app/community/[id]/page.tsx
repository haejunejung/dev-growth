import PostDetailPage from '@/screens/community/ui/PostDetailPage';

interface PostDetailProps {
  params: {
    id: string;
  };
}

export default function PostDetail({params}: PostDetailProps) {
  return <PostDetailPage id={params.id} />;
}
