import { PartialType } from '@nestjs/mapped-types';
import { CreateDonorDto } from './create-donor.dto.js';

export class UpdateDonorDto extends PartialType(CreateDonorDto) {}
