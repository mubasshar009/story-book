import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store';
import { TaskList } from './TaskList';

export type PropsError = {
    isError: string;
}
export const PureInboxScreen = (({isError}:PropsError )=> {
    if (isError) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        )
    }
    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList />
        </div>
    );

})
export const InboxScreen = () => {
    //Retriving Error field from our updating store;
    const isError = useSelector((state:RootState) => state.isError);
    return <PureInboxScreen isError= {isError.isError}/>
}