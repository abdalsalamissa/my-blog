import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom";

export default function PostDetails() {

    const {id} = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBlog(storedBlogs[id]);
    }, [id]);

    if(!blog) return <h3>Loading...</h3>

    return(
        <div style={{color: '#212121', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <Card sx={{minWidth: '400px', maxWidth: '800px'}}>
                <Typography variant="h3" sx={{marginBottom: '20px'}}>{blog.title}</Typography>
                <Typography variant="h4" sx={{marginBottom: '20px'}}>{blog.content}</Typography>
                <Typography variant="h6" sx={{marginBottom: '20px'}}>{blog.isPublic ? 'Public' : 'Private'}</Typography>

                <Link to={`/blog/${id}/Edit`}>
                    <EditIcon style={{background: '#4caf50', color: 'white', padding: '5px', borderRadius: '4px', margin: '10px'}} />
                </Link>
            </Card>
        </div>
    );
}