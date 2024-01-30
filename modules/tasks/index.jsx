import Button from "@/components/button";
import DashboardWrapper from "@/components/dashboard-wrapper";
import Link from "next/link";
import TasksColumn from "./partials/task-column";
import { TASKS } from "@/utils/globals";

export default function Tasks(){
    return (
        <DashboardWrapper active="Tasks">
            <div className="grid grid-cols-3">
                <TasksColumn tasks={TASKS}/>
            </div>
        </DashboardWrapper>
    )
}