import { useContext } from "react";
import { Link } from "react-router-dom";
import "./blogList.css";
import { ConventionContext } from "../../util/ConverstionContext";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Blog = ({ loading, error }) => {
  const { data } = useContext(ConventionContext);

  return (
    <>
    {/* <div style={{display : "flex" , flexDirection : "row"}}>
    {loading === false ? data.map((data)=>(
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )):null}
    </div> */}
      
      <div>
        {loading === false
          ? data.map((data) => (
              <div className="blog-preview" key={data.id}>
                <Link style={{textDecoration : "none"}} to={`/article/${data.id}`}>
                  <h2>{data.title}</h2>
                  <p>Writen by {data.author}</p>
                </Link>
              </div>
            ))
          : null}
      </div>
    </>
  );
};
export default Blog;
