'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
    travelers: number;
    setTravelers: (count: number) => void;
    selectedDate: string;
    setSelectedDate: (date: string) => void;
    duration: string;
    setDuration: (days: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [travelers, setTravelers] = useState(2);
    const [selectedDate, setSelectedDate] = useState('');
    const [duration, setDuration] = useState('');

    return (
        <BookingContext.Provider value={{
            travelers,
            setTravelers,
            selectedDate,
            setSelectedDate,
            duration,
            setDuration
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};
