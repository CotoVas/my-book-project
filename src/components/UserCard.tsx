import type { UserData } from '../types/user';

export function UserCard(props: { user: UserData }) {
    const { user } = props;
    return <article>{user.name}</article>;
}