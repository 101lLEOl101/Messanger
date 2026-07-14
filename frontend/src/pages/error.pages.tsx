import {
    Box,
    Container, Typography,
} from '@mui/material';

interface ErrorPageProps {
    code: string;
}

export const ErrorPage= ({code}: ErrorPageProps) => {
    return (
        <Container maxWidth="md">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
                <Typography variant={"h1"} component={"h1"} color={"primary"}>{code}</Typography>
                <Typography>Ooops! Something went wrong.</Typography>
            </Box>
        </Container>
    );
};

export default ErrorPage;
