import { Link,useParams } from 'react-router'

export default function TaskDetailPage(){
    const { id } = useParams()

    return(
        <section>
            <Link to="/task" className="text-sm text-indigo-600 hover:underline">
             ← Back to tasks
            </Link>

            <h1 className="mt-2 text-2xl font-bold text-slate-900">Task #{id}</h1>
        </section>
        
    )

}