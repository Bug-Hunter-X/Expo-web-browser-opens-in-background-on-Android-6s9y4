# Expo Web Browser Background Opening on Android

This repository demonstrates a bug where `expo-web-browser` opens in the background on Android instead of the foreground.  The issue is reproducible on various Android versions.  The solution involves using the `startAsync` method and adding some error handling.