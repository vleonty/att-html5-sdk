package com.html5sdk.att.servlet.votes;

import java.util.logging.Logger;

import org.json.JSONArray;
import org.json.JSONObject;

import com.html5sdk.att.servlet.SmsGenericListener;

public class VotingListener extends SmsGenericListener {
    private static final long serialVersionUID = 1L;

    private static Logger log = Logger
            .getLogger(VotingListener.class.getName());

    @Override
    public void processSmsMessage(JSONObject message) {

        log.info("message:" + message.toString());

        // count the votes here
        try {
            String msg = message.getString("Message");
            JSONArray votes = Votes.getVotes();
            int l = votes.length();

            log.info("votes:" + votes.toString());

            for (int i = 0; i < l; i++) {
                JSONObject vote = (JSONObject) votes.get(i);
                String sport = vote.getString("sport");
                if (msg != null && msg.equalsIgnoreCase(sport)) {
                    int value = vote.getInt("votes") + 1; // add the new vote
                    vote.put("votes", value);
                }
            }

            log.info("saving votes:" + votes.toString());

            Votes.saveVotes(votes);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
