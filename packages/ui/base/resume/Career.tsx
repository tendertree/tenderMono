interface Props{
	index:number
	Thumbnail:string;
}
export default function Career() {
    return (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src={job.thumbnail} alt={job.company} />
                            <AvatarFallback>{job.company.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="flex items-center space-x-2">
                                <job.icon className="h-5 w-5" />
                                <span>{job.title}</span>
                            </CardTitle>
                            <CardDescription>{job.company}</CardDescription>
                        </div>
                    </div>
                    <Badge variant="secondary">{job.duration}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
