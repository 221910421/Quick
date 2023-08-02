import * as React from 'react';
import { useToast } from 'native-base';

export default function ErrorAlert({ message }) {
    const toast = useToast();
    
    return (
        toast.show({
        title: 'Error',
        status: 'error',
        description: message,
        })
    );
    }