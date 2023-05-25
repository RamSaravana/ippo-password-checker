import {render,screen,fireEvent, getByText} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import PasswordStrengthMeter from '../../components/PasswordStrengthMeter';


describe('test suite for passwordmeter', () => {
    beforeEach(() => {        
        render(<PasswordStrengthMeter />)
    })
    it('check mandatory elements presence', () => {
        let username = screen.getByTestId('username');
        expect(username).toBeInTheDocument();
        let password = screen.getByTestId('password');
        expect(password).toBeInTheDocument();        
        let show = screen.getByTestId('show-password');
        expect(show).toBeInTheDocument();
        const submitButton = screen.queryByTestId('submit-button');
        expect(submitButton).toBeInTheDocument();
        const progressBar = screen.getByTestId('progress-bar')
        expect(progressBar).toBeInTheDocument();
    })
    it('toggle password visibility', () => {
        const showbutton = screen.queryByTestId('show-password');
        fireEvent.click(showbutton)
        expect(screen.getByTestId('password').type).toBe('text');
    })
    it('handle submit', () => {   
        const submitButton = screen.queryByTestId('submit-button');
        fireEvent.click(submitButton)
    })
    it('progress bar', () => {
        const password = screen.queryByTestId('password');
        fireEvent.change(password,{target:{value:'Neela@123'}})
        const progressBar = screen.getByTestId('progress-bar')
        expect(screen.getByTestId('progress-bar').classList.contains('w-100')).toBe(true);
    })
})