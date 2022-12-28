/// <reference types="react" />
import './header.css?inline';
export type User = {
    name: string;
};
export interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element;
export default Header;
