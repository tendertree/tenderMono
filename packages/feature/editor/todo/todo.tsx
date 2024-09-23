"use client"
import React, { useState } from 'react';

const Todo = () => {
    const [task, setTask] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleTaskChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask(e.target.value);
    };

    const handleSubmit = async () => {
        if (!task.trim()) {
            setMessage('Task cannot be empty.');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task }),
            });

            if (response.ok) {
                setMessage('Todo added successfully!');
                setTask(''); // Clear the input after successful submission
            } else {
                setMessage('Failed to add todo.');
            }
        } catch (error) {
            setMessage('An error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="todo-container">
            <textarea
                value={task}
                onChange={handleTaskChange}
                placeholder="Enter your task"
                className="textarea"
                disabled={isSubmitting}
            />
            <button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add Todo'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};



