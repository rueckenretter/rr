import { ExtensionStatus } from "../../models/ExtensionStatusEnum";

export interface IRueckenuebungenState {
    tabValue: string;
    extensionStatus: ExtensionStatus;
    modalOpen: boolean;
    uebungAnchorEl: Element|null;
    uebungLabel: string;
    meditationAnchorEl: Element|null;
    meditationLabel: string;
    urlId: string;
}