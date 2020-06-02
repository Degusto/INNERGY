export type ActionType = Actions | keyof typeof Actions;

export const enum Actions {
  Select = "Select",
  Deselect = "Deselect",
}

export type ServiceYear = 2020 | 2021 | 2022;
export type ServiceType = Services | keyof typeof Services;

export const enum Services {
  Photography = "Photography",
  VideoRecording = "VideoRecording",
  BlurayPackage = "BlurayPackage",
  TwoDayEvent = "TwoDayEvent",
  WeddingSession = "WeddingSession",
}
