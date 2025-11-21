export interface ReportDetailInterface {
  startDate: string;
  endDate: string;
  mahanagar?: DetailInterface[];
  jilla?: DetailInterface[];
  nagar?: DetailInterface[];
  other?: { greatherThan?: OtherDetailInterface[]; lessThan?: OtherDetailInterface[] };
}

export interface DetailInterface {
  name: string;
  sevaVastiSankhya: number;
  karyaYuktSevaVasti: number;
  sevaKaryaSankhya: KaryaInterface;
  sevaUpkramSankhya: KaryaInterface;
}

export interface OtherDetailInterface {
  name: string;
  gramSankhya?: number;
  sevaKaryaYuktGram?: number;
  lessThanGramSankhya?: number;
  sevaKaryaSankhya: KaryaInterface;
  sevaUpkramSankhya: KaryaInterface;
}

export interface KaryaInterface {
  shiksha: number;
  aarogya: number;
  samajik: number;
  swavalamban: number;
}
