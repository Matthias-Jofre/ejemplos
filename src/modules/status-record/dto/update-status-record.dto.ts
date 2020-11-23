import { PartialType } from "@nestjs/mapped-types";
import { CreateStatusRecordDto } from "./create-status-record.dto";

export class updateStatusRecord extends PartialType(CreateStatusRecordDto) {}