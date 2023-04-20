import { useRouter } from "next/router";
import Link from 'next/link'

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Post;
