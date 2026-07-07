import "../load-env";
import { createApp } from './app';

const PORT = Number(process.env.PORT) || 3001;

export const app = createApp();

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
