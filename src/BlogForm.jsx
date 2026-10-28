import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function BlogForm() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [isPublic, setIsPublic] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const newBlog = {
            title,
            content,
            isPublic
        }

        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

        storedBlogs.push(newBlog);

        localStorage.setItem("blogs", JSON.stringify(storedBlogs));

        navigate("/blogs");

        toast.success("Post Created successfully");
    }

    return(
        <Box component='form' onSubmit={handleSubmit} sx={{mt: 3, width: '30%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            <TextField label='Title' value={title} onChange={(e) => {setTitle(e.target.value)}} fullWidth sx={{mb: 2}} />

            <TextField label='Content' value={content} onChange={(e) => {setContent(e.target.value)}} fullWidth multiline rows={4} sx={{mb: 2}} />

            <Button type="submit" variant="contained" sx={{width: '100px', position: 'absolute', left: '50%', transform: 'translate(-50%)', top: '100%'}}>
                Save
            </Button>
        </Box>
    );
}