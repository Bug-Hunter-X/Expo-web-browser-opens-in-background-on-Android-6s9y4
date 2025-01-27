import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession(); // Add this line

const handlePress = async () => {
  try {
    await WebBrowser.openBrowserAsync('https://example.com');
  } catch (error) {
    console.error('Error opening browser:', error);
  }
};