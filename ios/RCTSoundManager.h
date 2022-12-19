#ifndef RCTSoundManager_h
#define RCTSoundManager_h

#import <AVFoundation/AVFoundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCTSoundManager : RCTEventEmitter <RCTBridgeModule, AVAudioPlayerDelegate>
@end

#endif
