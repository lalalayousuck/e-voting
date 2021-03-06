/******************************************************************************
 * e-voting system                                                            *
 * Copyright (C) 2016 DSX Technologies Limited.                               *
 * *
 * This program is free software; you can redistribute it and/or modify       *
 * it under the terms of the GNU General Public License as published by       *
 * the Free Software Foundation; either version 2 of the License, or          *
 * (at your option) any later version.                                        *
 * *
 * This program is distributed in the hope that it will be useful,            *
 * but WITHOUT ANY WARRANTY; without even the implied                         *
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.           *
 * See the GNU General Public License for more details.                       *
 * *
 * You can find copy of the GNU General Public License in LICENSE.txt file    *
 * at the top-level directory of this distribution.                           *
 * *
 * Removal or modification of this copyright notice is prohibited.            *
 * *
 ******************************************************************************/

package uk.dsxt.voting.common.domain.dataModel;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Value;

import java.math.BigDecimal;
import java.util.Map;

@Value
public class Client {
    String participantId;
    ParticipantRole clientType;
    Map<String, BigDecimal> packetSizeBySecurity;

    @JsonCreator
    public Client(@JsonProperty("participantId") String participantId, @JsonProperty("packetSizeBySecurity") Map<String, BigDecimal> packetSizeBySecurity,
                  @JsonProperty("clientType") ParticipantRole clientType) {
        this.participantId = participantId;
        this.packetSizeBySecurity = packetSizeBySecurity;
        this.clientType = clientType;
    }
}
