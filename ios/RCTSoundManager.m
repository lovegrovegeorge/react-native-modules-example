#import "RCTSoundManager.h"
#import <React/RCTLog.h>
#import <React/RCTUtils.h>

@implementation RCTSoundManager {
  AVAudioPlayer *player;
}

RCT_EXPORT_METHOD(play:(NSString *)name)
{
  NSError *error;
  NSString *path;
  NSURL *url;

  path = [[NSBundle mainBundle] pathForResource:name ofType:@"mp3"];
  url = [NSURL fileURLWithPath:path];

  player = [[AVAudioPlayer alloc] initWithContentsOfURL:url
                                                    error:&error];
  [player setDelegate:self];

  if (player) {
    [player setVolume:1.0];
    [player prepareToPlay];
    [player play];
  }
}

RCT_EXPORT_MODULE(SoundManager);

- (NSArray<NSString *> *)supportedEvents {
    return [NSArray arrayWithObjects:@"onPlayChange", nil];
}

@end
