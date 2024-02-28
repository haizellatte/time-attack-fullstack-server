// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   ParseIntPipe,
//   Patch,
//   Post,
//   UploadedFile,
// } from "@nestjs/common";
// import { Deal, Prisma, User } from "@prisma/client";
// import { DUser } from "src/decorators/DUser";
// import { UserOnly } from "src/decorators/user.only";
// import { DealsService } from "./deals.service";

// @Controller("deals")
// export class DealsController {
//   constructor(private readonly dealsService: DealsService) {}

//   @Post("/create")
//   @UserOnly()
//   async createDealPost(
//     @DUser() user: User,
//     @Body() createDealDto: Prisma.DealCreateWithoutUserInput,
//   ): Promise<Deal> {
//     const DealDto = { ...createDealDto, userEmail: user.email };

//     return this.dealsService.createDeal(DealDto);
//   }

//   @Get()
//   findAll(): Promise<Deal[]> {
//     return this.dealsService.getAllDeals();
//   }

//   @Get(":dealId")
//   findOne(@Param("dealId", ParseIntPipe) dealId: number): Promise<Deal | null> {
//     return this.dealsService.getDealById(dealId);
//   }

//   // todo :private(user) -> 추가하기

//   @Patch(":dealId")
//   update(
//     @Param("dealId", ParseIntPipe) dealId: number,
//     @Body() updateDealDto: Prisma.DealUpdateInput,
//   ): Promise<Deal> {
//     return this.dealsService.updateDeal(dealId, updateDealDto);
//   }

//   @Delete("dealId")
//   remove(@Param("dealId", ParseIntPipe) dealId: number): Promise<Deal> {
//     return this.dealsService.deleteDeal(dealId);
//   }

//   @Patch(":dealId/toggle-like")
//   toggleLike(
//     @DUser() user: User,
//     @Param("dealId", ParseIntPipe) dealId: number,
//   ): Promise<Deal> {
//     return this.dealsService.toggleLike(dealId, user.email);
//   }

//   @Post(":dealId/img-upload")
//   async uploadDealMainImg(@UploadedFile() file: Express.Multer.File) {
//     return this.dealsService.uploadDealImg(file);
//   }
// }

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Deal, Prisma } from "@prisma/client";
import { UserOnly } from "src/decorators/user.only";
import { DealsService } from "./deals.service";

@Controller("deals")
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post("/create")
  @UserOnly()
  async createDealPost(
    @Body() createDealDto: Prisma.DealCreateWithoutUserInput,
  ) {
    const DealDto = { ...createDealDto, userEmail: "user1@naver.com" };

    return this.dealsService.createDeal(DealDto);
  }

  @Get()
  findAll(): Promise<Deal[]> {
    return this.dealsService.getAllDeals();
  }

  @Get(":dealId")
  findOne(@Param("dealId", ParseIntPipe) dealId: number) {
    return this.dealsService.getDealById(dealId);
  }

  // todo :private(user) -> 추가하기

  @Patch(":dealId")
  update(
    @Param("dealId", ParseIntPipe) dealId: number,
    @Body() updateDealDto: Prisma.DealUpdateInput,
  ): Promise<Deal> {
    return this.dealsService.updateDeal(dealId, updateDealDto);
  }

  @Delete(":dealId")
  remove(@Param("dealId", ParseIntPipe) dealId: number): Promise<Deal> {
    return this.dealsService.deleteDeal(dealId);
  }

  @Patch(":dealId/toggle-like")
  toggleLike(@Param("dealId", ParseIntPipe) dealId: number): Promise<Deal> {
    return this.dealsService.toggleLike(dealId);
  }

  @UseInterceptors(FileInterceptor("file"))
  @Post(":dealId/img-upload")
  async uploadDealMainImg(@UploadedFile() file: Express.Multer.File) {
    return this.dealsService.uploadDealImg(file);
  }
}
