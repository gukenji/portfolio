import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
const ProjectWLabel = ({ project }) => {
  const { cover, title, description, icons } = project

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={cover} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {icons.map((icon) => (
            <img src={icon} className="w-[25px] md:w-[50px] hover:bg-white cursor-pointer rounded-lg" />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectWLabel
