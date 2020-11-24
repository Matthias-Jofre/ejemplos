import { PartialType } from "@nestjs/mapped-types";
import { CreateStatusRecordDto } from "./create-status-record.dto";

export class UpdateStatusRecordDto extends PartialType(CreateStatusRecordDto) {}