import { logger } from './logger.js';

export const sendNotification = async (message) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
  
  if (!webhookUrl) {
    logger.info('Notification skipped (No Webhook URL configured)', { message });
    return;
  }

  try {
    const payload = process.env.DISCORD_WEBHOOK_URL
      ? { content: message } // Discord format
      : { text: message };   // Slack format

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    logger.info('Notification sent successfully');
  } catch (error) {
    logger.error('Failed to send notification', error);
  }
};
