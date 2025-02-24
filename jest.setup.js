import 'react-native-gesture-handler/jestSetup';

// Mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation(() => {
            return {
                Easing: {
                    linear: jest.fn(),
                    ease: jest.fn(),
                },
            };
        }),
    };
});

// Mock NativeAnimatedHelper
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper', () => {
    return {
        shouldUseNativeDriver: jest.fn(() => false),
    };
});

// Add any other necessary mocks or setups