import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../komponen/navbar.js";
import Axios from "axios";
import { useRouter } from "next/router";

export const getStaticProps = async ({ params }) => {
  const { data } = await Axios.get(`http://localhost:8080/api/tutorials`);
  const post = data;
  return {
    props: {
      post,
    },
  };
};

export default function Pricing({ post }) {
  console.log(post);

  return (
    <div>
      <Header></Header>
      <div class="container">
        <div class="row">
          <legend>Hoverable rows</legend>
          <table class="table table-hover">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>UserName</th>
            </tr>

            {post.map((post, index) => (
              <tr>
                <td key={post.id}>{index + 1}</td>
                <td>{post.FirstName}</td>
                <td>{post.LastName}</td>
              </tr>
            ))}
          </table>
        </div>
        <div class="row">
          <legend>Responsive Tables</legend>
          <div class="table-responsive">
            <table class="table">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>UserName</th>
                <th>UserName</th>
                <th>UserName</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
